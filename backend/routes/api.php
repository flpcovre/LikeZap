<?php

use App\Http\Controllers\MessageController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'Hello World!']);
});

Route::post('/messages', [MessageController::class, 'store']);