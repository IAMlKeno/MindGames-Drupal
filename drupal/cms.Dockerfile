FROM drupal:10-php8.3

# RUN apt update -y && apt install vim
RUN composer require "drush/drush" "drupal/admin_toolbar:^3.4"
RUN ln -s /opt/drupal/vendor/bin/drush /usr/bin/drush
COPY ./settings.local.php /opt/drupal/web/sites/default
COPY ./settings.php /opt/drupal/web/sites/default

# CMD ["/usr/bin/drush", "config:import", "-y"]
