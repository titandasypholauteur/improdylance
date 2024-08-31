var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'    <head>'+
'    <title>improdylance</title>'+
'     <meta charset="utf-8" :>'+
'    </head>'+
'    <link rel="stylesheet" href="style.css">'+
'    <body>'+
'    <main>'+
'        <h1><center>Improdylance</center></h1><br />'+
'        <p>Tu connais certainement les sites et applis de rencontres. Probablement en utilise-tu une.</p>'+
'        <p>Mes deux loisirs préférés, qui me font le plus de bien et qui m\'ont le plus fait avancer dans la vie sont comme tu l\'as compris l\'impro et le body balance. Je trouve que les deux activités se complètent de façon plus qu\'excellentissime.</p>'+
'        <p>Je me suis dit qu\'il serait intéressant que des personnes se rencontrent, pratiquant l\'une et/ou l\'autre de ces activités.</p>'+
'        <p>J\'ai émis cette idée en septembre deux mille vingt-trois, en démarrant ma quatrième année d\'impro et ma seconde de body balance (après respectivement cinq et trois ans sans en pratiquer).</p>'+
'        <p>Les seuls prérequis pour s\'inscrire sur ce site/cette appli, que tu aies un minmum d\'intérêt pour au moins une de ces disciplines. Tu peux très bien être un.e adepte de l\'impro et ton/ta futur.e crusu du body balance.</p><br />'+
'        '+
'        <h2>Connexion</h2><br />'+
''+
'        <form id="connexion" class="formulaire" method="post" action="." onsubmit="document.getElementById(\'validator\').disabled=true;">'+
'          '+
'            <fieldset class="">'+
'                   '+
'                            <p class="champ">'+
'                            <label for="pseudo">Pseudo</label>'+
'                            <input id="pseudo" name="pseudo" value="" class="" />'+
'                        </p>'+
'        '+
'        '+
'                        <div>'+
'                          <label for="pass">mot de passe</label>'+
'                          <input type="password" id="pass" name="password" minlength="8" required />'+
'                        </div>'+
'        '+
''+
'                    '+
'        '+
'                    </fieldset>'+
'        '+
''+
'        '+
'                   '+
'                  '+
'                  <section>'+
'                  <button>'+
'                      <a href="page_profils_globaux.html">Connecte-toi</a></button>'+
'                  </section>'+
'                  '+
'              </form>'+
''+
'        <h2>Inscription</h2><br />'+
''+
''+
' '+
'          '+
'          '+
'          <form id="inscription" class="formulaire" method="post" action="." onsubmit="document.getElementById(\'validator\').disabled=true;">'+
'          '+
'              <fieldset class="">'+
'                     '+
'                              <p class="champ">'+
'                              <label for="pseudo">Pseudo</label>'+
'                              <input id="pseudo" name="pseudo" value="" class="" />'+
'                          </p>'+
'          '+
'                        '+
'                          <p class="champ">'+
'                              <label for="email">courriel</label>'+
'                              <input id="email" name="courriel" value="" class="" />'+
'                          </p>'+
'          '+
'                          <div>'+
'                            <label for="pass">mot de passe</label>'+
'                            <input type="password" id="pass" name="password" minlength="8" required />'+
'                          </div>'+
'          '+
'                          <div>'+
'                            <label for="pass">confirme ton mot de passe</label>'+
'                            <input type="password" id="pass" name="password" minlength="8" required />'+
'                          </div>'+
'                      '+
'          '+
'                      </fieldset>'+
'          '+
''+
'          '+
'                     '+
'                    '+
'                    <section>'+
'                    <button>'+
'                        <a href="message_inscription.html">Inscris-toi</a></button>'+
'                    </section>'+
'                    '+
'                </form>'+
'          '+
''+
'    </main>'+
'    '+
'    <body>'+
'</html>';