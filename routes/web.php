<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/terms', 'terms')->name('terms');
Route::inertia('/privacy', 'privacy')->name('privacy');
Route::inertia('/cookies', 'cookies')->name('cookies');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
