<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use \App\User;
use \App\Post;

class AuthorizeCustom
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $post = Post::find($request->id);
        $owner = $post->belongsTo('App\User','user_id')->first();
        //die(dump([$post,$owner]));//$post->belongsTo();
        //die(dump($post->belongsTo('App\User','user_id')->first()));
        if($owner->id != Auth::user()->id)
            return redirect()->route('admin.index')->with('info','You have no authorization to modify posts created by '.$owner->name);
        return $next($request);
    }
}
