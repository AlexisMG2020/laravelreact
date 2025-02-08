<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Laboratorio;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LaboratoriosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Laboratorio::insert(
            [
                [
                    'laboratorio' => 'Laboratorio 1'
                    , 'abreviatura' => 'Lab 1'
                    , 'estatus' => 'Activo'
                    , 'created_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                    , 'updated_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                ],
                [
                    'laboratorio' => 'Laboratorio de Cisco'
                    , 'abreviatura' => 'Cisco'
                    , 'estatus' => 'Activo'
                    , 'created_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                    , 'updated_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                ],
                [
                    'laboratorio' => 'Laboratorio 3'
                    , 'abreviatura' => 'Lab 3'
                    , 'estatus' => 'Activo'
                    , 'created_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                    , 'updated_at' => Carbon::now('America/Mexico_City')->format('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
