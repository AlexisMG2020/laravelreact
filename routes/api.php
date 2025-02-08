<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DireccionesController;
use App\Http\Controllers\CarrerasController;
use App\Http\Controllers\AsignaturasController;

/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
 */

 Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [LoginController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('direcciones', DireccionesController::class)->except(['create', 'edit']);
    Route::resource('carreras', CarrerasController::class)->except(['create','edit']);
    Route::resource('asignaturas', AsignaturasController::class)->except(['create','edit']);
});