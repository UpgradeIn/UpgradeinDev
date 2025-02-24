<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/detail-project', function () {
    return Inertia::render('DetailProject');
});

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/projects/{slug}', [HomeController::class, 'show'])->name('projects.show');
