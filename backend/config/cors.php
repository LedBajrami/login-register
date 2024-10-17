<?php

return [

'paths' => ['api/*'],

'allowed_methods' => ['*'],

'allowed_origins' => ['http://localhost:3000'], 

'allowed_origins_patterns' => [],

'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization', 'Accept', 'Origin'],

'exposed_headers' => [],

'max_age' => 0,

'supports_credentials' => false,

];
