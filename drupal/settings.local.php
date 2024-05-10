<?php

$databases['default']['default'] = [
  'database' => 'mindgames',
  'username' => 'user',
  'password' => 'password',
  'prefix' => '',
  'host' => 'mindgames_db',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
];
$settings['config_sync_directory'] = '/opt/drupal/config/sync';