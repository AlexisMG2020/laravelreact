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


Route::get('/formato', function(){
    set_time_limit(0);

    $archivo = uniqid('formato', true) . '.docx';
    $ruta_archivo = storage_path('app/' . $archivo);
    exec('"C:\\Program Files\\nodejs\\node.exe" "C:\\xampp\\htdocs\\laravelreact\\reportes\\reporte.js" 1 "' . $ruta_archivo . '"', $salida, $retorno);

    if(Illuminate\Support\Facades\Storage::exists($archivo)){
        return Illuminate\Support\Facades\Storage::download($archivo, 'formato-de-uso-de-laboratorio.docx');
    }
    echo 'No encontrado';

    // print_r($salida, $retorno, $ruta_archivo);

})->name('formato');
