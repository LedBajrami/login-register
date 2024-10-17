<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/user', [UserController::class, 'user'])->middleware('auth:api');
Route::post('/user/upload', [UserController::class, 'upload'])->middleware('auth:api');
