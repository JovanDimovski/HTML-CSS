<?php

namespace App\Http\Controllers;

use App\Post;
use App\Like;
use App\Tag;
use Auth;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Session\Store;

class PostController extends Controller
{
    public function getIndex(Store $session)//Sto pravi ova??Store $session
    {
        // $post = new Post();
        // $posts = $post->getPosts($session);
        $posts = Post::paginate(2);
        return view('blog.index',['posts'=>$posts]);
    }

    public function getIndexByDate()
    {
        $posts = Post::orderByDesc('created_at')->get();
        return view('blog.index',['posts'=>$posts]);
    }

    public function getAdminIndex(Store $session)
    {
        //$post = new Post();
        //die(dump($posts));
        //$posts = $post->getPosts($session);
        $posts = Post::all();
        return view('admin.index', ['posts' => $posts]);
    }

    public function getPost(Store $session, $id)
    {
        // $post = new Post();
        // $post = $post->getPost($session, $id);
        $post = Post::find($id)->with('likes');//This is eager loading 
        return view('blog.post', ['post' => $post]);
    }

    public function getLikePost($id)
    {
        $post = Post::find($id);
        $like = new Like(); 
        $post->likes()->save($like);
        return redirect()->back();
    }

    public function getAdminCreate()
    {
        $tags = Tag::all();
        return view('admin.create',['tags'=>$tags]);
    }

    public function getAdminEdit(Store $session, $id)
    {
        $post = Post::find($id);
        $tags = Tag::all();
        //$post = $post->getPost($session, $id);
        return view('admin.edit', ['post' => $post, 'postId' => $post->id,'tags'=>$tags]);
    }

    public function postAdminCreate(Store $session, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10'
        ]);
        $user = Auth::user();
        if(!$user){
            return redirect()->back();
        }
        $post = new Post([
            'title'=>$request->input('title'),
            'content'=>$request->input('content')
        ]);
        //$post->save();
        $user->posts()->save($post);
        $post->tags()->attach($request->input('tags')===null?[]:$request->input('tags'));
        //$post->addPost($session, $request->input('title'), $request->input('content'));
        return redirect()->route('admin.index')->with('info', 'Post created, Title is: ' . $request->input('title'));
    }

    public function postAdminUpdate(Store $session, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10'
        ]);
        $post = Post::find($request->input('id'));
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();
        $post->tags()->sync($request->input('tags')===null?[]:$request->input('tags'));
        // $post->editPost($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('admin.index')->with('info', 'Post edited, new Title is: ' . $request->input('title'));
    }

    public function getAdminDelete($id)
    {
        //die(dump("Cant find post"));
        $post = Post::find($id);
        $title = $post->title;

        $post->likes()->delete();
        $post->tags()->detach();
        $post->delete();
        return redirect()->route('admin.index')->with('info', 'Post deleted: '.$title);
    }
}
