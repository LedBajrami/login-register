<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request) {

        $request->validate([
            'name' => 'required', 
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => "User registred succsefully", 'user' => $user], 201);
    }



    public function login(Request $request) {

        $credentials = $request->only('email', 'password');

        

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('LoginToken')->accessToken;

            return response()->json(['message' => "User sucessfully logged in", 'user' => $user, 'token' => $token], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function user(Request $request) {
        $user = Auth::user();

        if ($user) {
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ], 200);
        }

        return response()->json(['error' => 'User not authenticated'], 401);
    }
}
