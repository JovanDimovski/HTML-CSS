<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('blog.index');
// })->name("blog.index");

// Route::get('/', 'PostController@getIndex')->name("blog.index");

Route::get('/', [
    'uses'=>'PostController@getIndex', 
    'as'=> 'blog.index'
]);

Route::get('datedescending', [
    'uses'=>'PostController@getIndexByDate', 
    'as'=> 'blog.index.date'
]);


Route::get('/Test', function () {
    return view('test');
});

// Route::get('post/{id}', function ($id) {
//     if($id == 1){
//         $post = [
//             'title' => 'Title1',
//             'content' => 'Content1'
//         ];
//     }else{
//         $post = [
//             'title' => 'Title2',
//             'content' => 'Content2 id: '.$id
//         ];
//     }
//     return view('blog.post', ['post'=>$post]);
// })->name("blog.post");

Route::get('post/{id}', [
    'uses'=>'PostController@getPost', 
    'as'=> 'blog.post'
]);

Route::get('post/{id}/like', [
    'uses'=>'PostController@getLikePost', 
    'as'=> 'blog.post.like'
]);



// Route::get('admin', function () {
//     return view('admin.index');
// })->name("admin.index");

// Route::get('admin/edit/{id}', function () {
//     return view('admin.edit');
// })->name("admin.edit");

// Route::get('admin/create', function () {
//     return view('admin.create');
// })->name("admin.create");

// Route::post('admin/create', function () {
//     return "ON POST";
// })->name("admin.create.post");

// Route::group(['prefix'=>'admin'],function(){
//     Route::get('', function () {
//         return view('admin.index');
//     })->name("admin.index");

//     Route::get('edit/{id}', function ($id) {
//         if($id == 1){
//             $post = [
//                 'title' => 'Title1',
//                 'content' => 'Content1'
//             ];
//         }else{
//             $post = [
//                 'title' => 'Title2',
//                 'content' => 'Content2 id: '.$id
//             ];
//         }
//         return view('admin.edit', ['post'=>$post]);
//     })->name("admin.edit");

//     Route::post('edit', function (\Illuminate\Http\Request $request, \Illuminate\Validation\Factory $validator) {
//         $validation = $validator->make($request->all(),['title'=>'required|min:5','content'=>'required|min:10']);
//         if($validation->fails()){
//             return redirect()->back()->withErrors($validation);
//         }
//         return redirect()->
//         route('admin.index')->
//         with('info','post edited, new title: '.$request->input('title'));//$request->input('title');
//     })->name("admin.update");

//     Route::get('create', function () {
//         return view('admin.create');
//     })->name("admin.create");

//     Route::post('create', function (\Illuminate\Http\Request $request, \Illuminate\Validation\Factory $validator) {
//         $validation = $validator->make($request->all(),['title'=>'required|min:5','content'=>'required|min:10']);
//         if($validation->fails()){
//             return redirect()->back()->withErrors($validation);
//         }
//         return redirect()->
//         route('admin.index')->
//         with('info','post created, new title: '.$request->input('title'));//$request->input('title');
//     })->name("admin.create");

//     // Route::post('create', function (\Illuminate\Http\Request $request) {
//     //     return "ON POST";
//     // })->name("admin.create.post");

//     Route::get('create', function () {
//          return view('admin.create');
//     })->name("admin.create.post");
// });

Route::group(['prefix'=>'admin'],function(){
    Route::get('',[
        'uses'=>'PostController@getAdminIndex',
        'as'=>'admin.index'
    ]);
    
    Route::get('create',[
        'uses'=>'PostController@getAdminCreate',
        'as'=>'admin.create'
    ]);

    Route::post('create',[
        'uses'=>'PostController@postAdminCreate',
        'as'=>'admin.create.post'
    ]);
    
    Route::get('edit/{id}',[
        'uses'=>'PostController@getAdminEdit',
        'as'=>'admin.edit'
    ]);

    Route::post('edit',[
        'uses'=>'PostController@postAdminUpdate',
        'as'=>'admin.update'
    ]);

    Route::get('delete/{id}',[
        'uses'=>'PostController@getAdminDelete',
        'as'=>'admin.delete2'
    ]);

});

Route::get('about', function () {
    return view('other.about');
})->name("about");

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
