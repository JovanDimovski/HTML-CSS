<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $post = new \App\Post([
            'title' => 'Title1',
            'content' => 'Content1'  
        ]);
        $post->save();
        $post = new \App\Post([
            'title' => 'Title2',
            'content' => 'Content2'  
        ]);
        $post->save();
        $post = new \App\Post([
            'title' => 'Title3',
            'content' => 'Content3'  
        ]);
        $post->save();
    }
}
