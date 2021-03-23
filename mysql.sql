CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `message` varchar(120) NOT NULL
)AUTO_INCREMENT=1 ;
ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
