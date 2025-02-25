<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = Project::with('category')->get();

        return Inertia::render('Project', [
            'projects' => $projects
        ]);
    }
}
