<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'banner_image',
        'project_images',
        'description',
    ];

    protected $casts = [
        'project_images' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function getBannerUrlAttribute(): ?string
    {
        return $this->banner_image ? asset('storage/' . $this->banner_image) : null;
    }

    public function getProjectImagesUrlAttribute(): array
    {
        if (!$this->project_images) return [];
        return array_map(fn($image) => asset('storage/' . $image), $this->project_images);
    }
}
