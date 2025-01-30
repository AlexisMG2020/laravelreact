<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


 Route::any('/{a?}', function () {
    return view('/app');
})->where('a', '^(?!api\/).*$')->name('reactjs');
