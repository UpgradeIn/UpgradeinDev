<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::with('category')->get();

        return Inertia::render('Home', [
            'projects' => $projects
        ]);
    }

    public function show($slug)
    {
        $otherProject = Project::with('category')->get();
        $project = Project::with('category')
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('DetailProject', [
            'project' => $project,
            'otherProject' => $otherProject
        ]);
    }
}
