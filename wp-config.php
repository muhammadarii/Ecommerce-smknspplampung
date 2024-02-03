<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'smknspp_wp_f9xeg' );

/** Database username */
define( 'DB_USER', 'smknspp_wp_ndlmd' );

/** Database password */
define( 'DB_PASSWORD', 'E4X@0y~8@TiDr5G_' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '97k4t)b//A7H39s6:(%ba@~N&]y8V*9AT-]F)YF86HQcp!~2a(p]Ixy8R4Wyr@ut');
define('SECURE_AUTH_KEY', '4:T/Xu-~27LS6*nT7OFi61K8k;3A+DI1r)SNLt)vWSS[n6p1t|50hU(z)fl;jeQl');
define('LOGGED_IN_KEY', '#~+G_/x7#%#)aFps9r3NJVpTmv9Vz-6]1So3nd(Vv&N@:o7Y5R6N5Tu-6cP@GB2|');
define('NONCE_KEY', '244h8*w71Siy)G&P]8d_;#aP17#[iFKM#02Xd*3pJ:Py65HXg5zH610]id63paHz');
define('AUTH_SALT', '7l60-4wIgt)eHw!q%%~F;xp-~C[j~fs:BeA44a41p0+w0;~wI04*V-]w21*2jHU%');
define('SECURE_AUTH_SALT', ']e%a5+|EGFE~-Kr-OGkr29oV2t3_Q:pH2P[*%mz]5_GhxPWL7+LwGyKl6C!|4XuU');
define('LOGGED_IN_SALT', 'M35!|g;X_17-wF0X_u1b4_Xnm92/0FoOd)C-V9e6@j!a6nTd|6J!2Dd#kfJ2/3BV');
define('NONCE_SALT', '1nl]w8D[SB/G:tj(-8Cp0XV::tCFV1oO*k3pC~kL@5:6Bfqy8-9w4*D02wGdWtxz');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'MNAS1LOQr_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';