<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function posts()
    {
        return $this->belongsToMany('App\Post'/*, pivot_table_name,tag_id,post_id */)->withTimestamps();
    }
}
