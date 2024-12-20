<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;


Route::group([], function() {
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/login', [UserController::class, 'login']);
});

Route::middleware(['auth:api'])->group(function() {
    Route::get('/user', [UserController::class, 'user']);
    Route::post('/user/upload', [UserController::class, 'upload']);
});