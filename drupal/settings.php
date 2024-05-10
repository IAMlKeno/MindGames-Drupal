<?php

// phpcs:ignoreFile

/**
 * @file
 * Drupal site-specific configuration file.
 *
 * IMPORTANT NOTE:
 * This file may have been set to read-only by the Drupal installation program.
 * If you make changes to this file, be sure to protect it again after making
 * your modifications. Failure to remove write permissions to this file is a
 * security risk.
 *
 * In order to use the selection rules below the multisite aliasing file named
 * sites/sites.php must be present. Its optional settings will be loaded, and
 * the aliases in the array $sites will override the default directory rules
 * below. See sites/example.sites.php for more information about aliases.
 *
 * The configuration directory will be discovered by stripping the website's
 * hostname from left to right and pathname from right to left. The first
 * configuration file found will be used and any others will be ignored. If no
 * other configuration file is found then the default configuration file at
 * 'sites/default' will be used.
 *
 * For example, for a fictitious site installed at
 * https://www.drupal.org:8080/my-site/test/, the 'settings.php' file is searched
 * for in the following directories:
 *
 * - sites/8080.www.drupal.org.my-site.test
 * - sites/www.drupal.org.my-site.test
 * - sites/drupal.org.my-site.test
 * - sites/org.my-site.test
 *
 * - sites/8080.www.drupal.org.my-site
 * - sites/www.drupal.org.my-site
 * - sites/drupal.org.my-site
 * - sites/org.my-site
 *
 * - sites/8080.www.drupal.org
 * - sites/www.drupal.org
 * - sites/drupal.org
 * - sites/org
 *
 * - sites/default
 *
 * Note that if you are installing on a non-standard port number, prefix the
 * hostname with that number. For example,
 * https://www.drupal.org:8080/my-site/test/ could be loaded from
 * sites/8080.www.drupal.org.my-site.test/.
 *
 * @see example.sites.php
 * @see \Drupal\Core\DrupalKernel::getSitePath()
 *
 * In addition to customizing application settings through variables in
 * settings.php, you can create a services.yml file in the same directory to
 * register custom, site-specific service definitions and/or swap out default
 * implementations with custom ones.
 */

/**
 * Database settings:
 *
 * The $databases array specifies the database connection or
 * connections that Drupal may use.  Drupal is able to connect
 * to multiple databases, including multiple types of databases,
 * during the same request.
 *
 * One example of the simplest connection array is shown below. To use the
 * sample settings, copy and uncomment the code below between the @code and
 * @endcode lines and paste it after the $databases declaration. You will need
 * to replace the database username and password and possibly the host and port
 * with the appropriate credentials for your database system.
 *
 * The next section describes how to customize the $databases array for more
 * specific needs.
 *
 * @code
 * $databases['default']['default'] = [
 *   'database' => 'databasename',
 *   'username' => 'sql_username',
 *   'password' => 'sql_password',
 *   'host' => 'localhost',
 *   'port' => '3306',
 *   'driver' => 'mysql',
 *   'prefix' => '',
 *   'collation' => 'utf8mb4_general_ci',
 * ];
 * @endcode
 */
$databases = [];

/**
 * Customizing database settings.
 *
 * Many of the values of the $databases array can be customized for your
 * particular database system. Refer to the sample in the section above as a
 * starting point.
 *
 * The "driver" property indicates what Drupal database driver the
 * connection should use.  This is usually the same as the name of the
 * database type, such as mysql or sqlite, but not always.  The other
 * properties will vary depending on the driver.  For SQLite, you must
 * specify a database file name in a directory that is writable by the
 * webserver.  For most other drivers, you must specify a
 * username, password, host, and database name.
 *
 * Drupal core implements drivers for mysql, pgsql, and sqlite. Other drivers
 * can be provided by contributed or custom modules. To use a contributed or
 * custom driver, the "namespace" property must be set to the namespace of the
 * driver. The code in this namespace must be autoloadable prior to connecting
 * to the database, and therefore, prior to when module root namespaces are
 * added to the autoloader. To add the driver's namespace to the autoloader,
 * set the "autoload" property to the PSR-4 base directory of the driver's
 * namespace. This is optional for projects managed with Composer if the
 * driver's namespace is in Composer's autoloader.
 *
 * For each database, you may optionally specify multiple "target" databases.
 * A target database allows Drupal to try to send certain queries to a
 * different database if it can but fall back to the default connection if not.
 * That is useful for primary/replica replication, as Drupal may try to connect
 * to a replica server when appropriate and if one is not available will simply
 * fall back to the single primary server (The terms primary/replica are
 * traditionally referred to as master/slave in database server documentation).
 *
 * The general format for the $databases array is as follows:
 * @code
 * $databases['default']['default'] = $info_array;
 * $databases['default']['replica'][] = $info_array;
 * $databases['default']['replica'][] = $info_array;
 * $databases['extra']['default'] = $info_array;
 * @endcode
 *
 * In the above example, $info_array is an array of settings described above.
 * The first line sets a "default" database that has one primary database
 * (the second level default).  The second and third lines create an array
 * of potential replica databases.  Drupal will select one at random for a given
 * request as needed.  The fourth line creates a new database with a name of
 * "extra".
 *
 * For MySQL, MariaDB or equivalent databases the 'isolation_level' option can
 * be set. The recommended transaction isolation level for Drupal sites is
 * 'READ COMMITTED'. The 'REPEATABLE READ' option is supported but can result
 * in deadlocks, the other two options are 'READ UNCOMMITTED' and 'SERIALIZABLE'.
 * They are available but not supported; use them at your own risk. For more
 * info:
 * https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html
 *
 * On your settings.php, change the isolation level:
 * @code
 * $databases['default']['default']['init_commands'] = [
 *   'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
 * ];
 * @endcode
 *
 * You can optionally set a prefix for all database table names by using the
 * 'prefix' setting. If a prefix is specified, the table name will be prepended
 * with its value. Be sure to use valid database characters only, usually
 * alphanumeric and underscore. If no prefix is desired, do not set the 'prefix'
 * key or set its value to an empty string ''.
 *
 * For example, to have all database table prefixed with 'main_', set:
 * @code
 *   'prefix' => 'main_',
 * @endcode
 *
 * Advanced users can add or override initial commands to execute when
 * connecting to the database server, as well as PDO connection settings. For
 * example, to enable MySQL SELECT queries to exceed the max_join_size system
 * variable, and to reduce the database connection timeout to 5 seconds:
 * @code
 * $databases['default']['default'] = [
 *   'init_commands' => [
 *     'big_selects' => 'SET SQL_BIG_SELECTS=1',
 *   ],
 *   'pdo' => [
 *     PDO::ATTR_TIMEOUT => 5,
 *   ],
 * ];
 * @endcode
 *
 * WARNING: The above defaults are designed for database portability. Changing
 * them may cause unexpected behavior, including potential data loss. See
 * https://www.drupal.org/docs/8/api/database-api/database-configuration for
 * more information on these defaults and the potential issues.
 *
 * More details can be found in the constructor methods for each driver:
 * - \Drupal\mysql\Driver\Database\mysql\Connection::__construct()
 * - \Drupal\pgsql\Driver\Database\pgsql\Connection::__construct()
 * - \Drupal\sqlite\Driver\Database\sqlite\Connection::__construct()
 *
 * Sample Database configuration format for PostgreSQL (pgsql):
 * @code
 *   $databases['default']['default'] = [
 *     'driver' => 'pgsql',
 *     'database' => 'databasename',
 *     'username' => 'sql_username',
 *     'password' => 'sql_password',
 *     'host' => 'localhost',
 *     'prefix' => '',
 *   ];
 * @endcode
 *
 * Sample Database configuration format for SQLite (sqlite):
 * @code
 *   $databases['default']['default'] = [
 *     'driver' => 'sqlite',
 *     'database' => '/path/to/database_filename',
 *   ];
 * @endcode
 *
 * Sample Database configuration format for a driver in a contributed module:
 * @code
 *   $databases['default']['default'] = [
 *     'driver' => 'my_driver',
 *     'namespace' => 'Drupal\my_module\Driver\Database\my_driver',
 *     'autoload' => 'modules/my_module/src/Driver/Database/my_driver/',
 *     'database' => 'databasename',
 *     'username' => 'sql_username',
 *     'password' => 'sql_password',
 *     'host' => 'localhost',
 *     'prefix' => '',
 *   ];
 * @endcode
 *
 * Sample Database configuration format for a driver that is extending another
 * database driver.
 * @code
 *   $databases['default']['default'] = [
 *     'driver' => 'my_driver',
 *     'namespace' => 'Drupal\my_module\Driver\Database\my_driver',
 *     'autoload' => 'modules/my_module/src/Driver/Database/my_driver/',
 *     'database' => 'databasename',
 *     'username' => 'sql_username',
 *     'password' => 'sql_password',
 *     'host' => 'localhost',
 *     'prefix' => '',
 *     'dependencies' => [
 *       'parent_module' => [
 *         'namespace' => 'Drupal\parent_module',
 *         'autoload' => 'core/modules/parent_module/src/',
 *       ],
 *     ],
 *   ];
 * @endcode
 */

/**
 * Location of the site configuration files.
 *
 * The $settings['config_sync_directory'] specifies the location of file system
 * directory used for syncing configuration data. On install, the directory is
 * created. This is used for configuration imports.
 *
 * The default location for this directory is inside a randomly-named
 * directory in the public files path. The setting below allows you to set
 * its location.
 */
# $settings['config_sync_directory'] = '/directory/outside/webroot';

/**
 * Settings:
 *
 * $settings contains environment-specific configuration, such as the files
 * directory and reverse proxy address, and temporary configuration, such as
 * security overrides.
 *
 * @see \Drupal\Core\Site\Settings::get()
 */

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 *
 * This variable will be set to a random value by the installer. All one-time
 * login links will be invalidated if the value is changed. Note that if your
 * site is deployed on a cluster of web servers, you must ensure that this
 * variable has the same value on each server.
 *
 * For enhanced security, you may set this variable to the contents of a file
 * outside your document root, and vary the value across environments (like
 * production and development); you should also ensure that this file is not
 * stored with backups of your database.
 *
 * Example:
 * @code
 *   $settings['hash_salt'] = file_get_contents('/home/example/salt.txt');
 * @endcode
 */
$settings['hash_salt'] = 'luAvCBu9JnTAm_Q_4FZVGBBCB7tDWw3H_Obe6Od6lEiOT7r4Zxi3-KA8zxtMua_zv5byBxxEQQ';

/**
 * Deployment identifier.
 *
 * Drupal's dependency injection container will be automatically invalidated and
 * rebuilt when the Drupal core version changes. When updating contributed or
 * custom code that changes the container, changing this identifier will also
 * allow the container to be invalidated as soon as code is deployed.
 */
# $settings['deployment_identifier'] = \Drupal::VERSION;

/**
 * Access control for update.php script.
 *
 * If you are updating your Drupal installation using the update.php script but
 * are not logged in using either an account with the "Administer software
 * updates" permission or the site maintenance account (the account that was
 * created during installation), you will need to modify the access check
 * statement below. Change the FALSE to a TRUE to disable the access check.
 * After finishing the upgrade, be sure to open this file again and change the
 * TRUE back to a FALSE!
 */
$settings['update_free_access'] = FALSE;
/**
 * Load services definition file.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

# $settings['yaml_parser_class'] = NULL;
# $settings['trusted_host_patterns'] = [];
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

$settings['entity_update_batch_size'] = 50;

/**
 * Entity update backup.
 *
 * This is used to inform the entity storage handler that the backup tables as
 * well as the original entity type and field storage definitions should be
 * retained after a successful entity update process.
 */
$settings['entity_update_backup'] = TRUE;

/**
 * Node migration type.
 *
 * This is used to force the migration system to use the classic node migrations
 * instead of the default complete node migrations. The migration system will
 * use the classic node migration only if there are existing migrate_map tables
 * for the classic node migrations and they contain data. These tables may not
 * exist if you are developing custom migrations and do not want to use the
 * complete node migrations. Set this to TRUE to force the use of the classic
 * node migrations.
 */
$settings['migrate_node_migrate_type_classic'] = FALSE;

if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
