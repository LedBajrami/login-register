<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UploadPhotoRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function register(RegisterRequest $request) {

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => "User registred succsefully", 'user' => $user], 201);
    }



    public function login(LoginRequest $request) {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('LoginToken')->accessToken;

            return response()->json(['message' => "User sucessfully logged in", 'user' => $user, 'token' => $token], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function user() {
        $user = Auth::user();

        if ($user) {
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'profile_photo' => $user->profile_photo
            ], 200);
        }

        return response()->json(['error' => 'User not authenticated'], 401);
    }

    public function upload(UploadPhotoRequest $request) {
        $user = Auth::user();
        if ($user) {
            $path = $request->file('profile_photo')->store('profile_photos', 'public');

            $user->profile_photo = Storage::url($path); 
            $user->save();

            return response()->json(['profile_photo' => $user->profile_photo], 200);
        }

        return response()->json(['error' => 'User not authenticated'], 401);
    }
}
