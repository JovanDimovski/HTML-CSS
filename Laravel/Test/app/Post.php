<?php

namespace App;
//use Illuminate\Database\Eloquent;

class Post extends \Eloquent
{
    protected $fillable = ['title','content'];

    public function likes()
    {
        return $this->hasMany('App\Like');
    }


    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }

    public function setTitleAttribute($value){
        $this->attributes['title'] = strtolower($value);
    }

    public function getTitleAttribute($value){
        return \strtoupper($value);
    }




//     public function getPosts($session)
//     {
//         if(!$session->has('posts')){
//             $this->createDummyData($session);
//         }
//         return $session->get('posts');
//     }
// ////////////////////////////////////////////////////////////////////////////////////////
//     public function getPost($session, $id)
//     {
//         if (!$session->has('posts')) {
//             $this->createDummyData();
//         }
//         return $session->get('posts')[$id];
//     }

//     public function addPost($session, $title, $content)
//     {
//         if (!$session->has('posts')) {
//             $this->createDummyData();
//         }
//         $posts = $session->get('posts');
//         array_push($posts, ['title' => $title, 'content' => $content]);
//         $session->put('posts', $posts);
//     }

//     public function editPost($session, $id, $title, $content)
//     {
//         $posts = $session->get('posts');
//         $posts[$id] = ['title' => $title, 'content' => $content];
//         $session->put('posts', $posts);
//     }
// ////////////////////////////////////////////////////////////////////////////////////////

//     private function createDummyData($session)
//     {
//         $posts = [
//             [
//                 'title' => 'Learning Laravel',
//                 'content' => "Learning Laravel content"
//             ],
//             [
//                 'title' => 'Learning Laravel 2',
//                 'content' => "Learning Laravel 2 content"
//             ]
//             ];
//     $session->put('posts', $posts);
//     }
}