<?php
// Vérifie qu'il provient d'un formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //identifiants mysql
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "portfoliobdd";
    $destMail = "noemienino94@gmail.com";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    if (!isset($name)) {
        die("S'il vous plaît entrez votre nom");
    }
    if (!isset($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("S'il vous plaît entrez votre adresse e-mail");
    }
    if (!isset($message)) {
        die("S'il vous plaît entrez votre message");
    }
} else {
}

//Ouvrir une nouvelle connexion au serveur MySQL
$mysqli = new mysqli($host, $username, $password, $database);

//Afficher toute erreur de connexion
if ($mysqli->connect_error) {
    die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

//préparer la requête d'insertion SQL
$statement = $mysqli->prepare("INSERT INTO users (name, email, message) VALUES(?, ?, ?)");
//Associer les valeurs et exécuter la requête d'insertion
$statement->bind_param("sss", $name, $email, $message);

if ($statement->execute()) {
    print "Salut " . $name . "! Votre adresse e-mail est " . $email ."<br> Votre message a bien été envoyé <br>" . $message . "<br>";
} else {
    print $mysqli->error;
}

$objetMail = $email . " - Contact via formulaire du site";
$corpsMail = "<html><head><meta charset=\"UTF-8\"></head><body>Expéditeur : " . $email . "<br> Message : <br>" . $message . "</body></html>";

// qui a envoyé le message
$headers = "From: \"" . $name . "\"<" . $email . ">\n";
// a quelle adresse répondre
$headers .= "Reply-To: ". $email ."\n";
// format du mail ici html
$headers .= "Content-Type: text/html; charset=\"utf-8\"";

if(mail($destMail, $objetMail, $corpsMail, $headers)) {
    print "Salut " . $name . "!, votre adresse e-mail est " . $email ."<br> Votre mail a bien été envoyé ";
}
else {
    print "Erreur lors de l'envoi du mail";
}
?>
