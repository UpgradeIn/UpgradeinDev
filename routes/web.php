<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/service', function () {
    return Inertia::render('Service');
});

Route::get('/project', function () {
    return Inertia::render('Project');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/detail-project', function () {
    return Inertia::render('DetailProject');
});

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/project', [ProjectController::class, 'index'])->name('projects');

Route::get('/projects/{slug}', [HomeController::class, 'show'])->name('projects.show');
