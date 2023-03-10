<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TemplatePage extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'id',
        'template_id',
        'name',
        'content',
        'gjs',
    ];
    protected $table = 'templatepages';
}
