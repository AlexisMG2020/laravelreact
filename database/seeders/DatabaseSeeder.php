<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(
            [
<<<<<<< HEAD
                UsersTableSeeder::class,
                DireccionesTableSeeder::class,
                CarrerasTableSeeder::class,  
                AsignaturasTableSeeder::class,
                LaboratoriosTableSeeder::class,
                CuatrimestresTableSeeder::class  
=======
                // UsersTableSeeder::class,
                // DireccionesTableSeeder::class,
                // CarrerasTableSeeder::class,  
                // AsignaturasTableSeeder::class,
                // LaboratoriosTableSeeder::class,
                // CuatrimestresTableSeeder::class,
                // Unidades_MedidasTableSeeder::class  
                // MaterialesTableSeeder::class,
                DiasFeriadosTableSeeder::class,
>>>>>>> 0b346db3b771fc8671192a31031d4eb8a1b5d7b2
            ]
        );

    
    }
}
