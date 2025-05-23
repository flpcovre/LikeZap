<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request) {

        return response()->json([
            'status' => 'Message received',
            'body' => $request->all(),
        ]);
    }
}
