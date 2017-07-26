<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ViewTest extends TestCase
{
    /**
     * Testing home page
     *
     * @return void
     */
    public function testHome()
    {
        $this->get('/')
            ->assertSee('Enter your name');
    }
    /**
     * Testing submission
     *
     * @return void
     */
    public function testRegister()
    {
        $this->get('/test')
            ->assertSee('Welcome Hello World');
    }
}
