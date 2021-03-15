var signo = prompt('Cual es tu signo? (en minusculas)');

switch (signo) {
    case 'aries':
        console.log(
            'Manténgase firme en cada uno de sus pensamientos. En caso de que deba tomar una decisión, piénselo bien, ya que puede actuar erróneamente y salir perdiendo.'
            );
        break;

    case 'tauro':
        console.log(
            'Evite que cualquier persona lo bloquee en sus decisiones y ejerza poder sobre su persona. Usted ya es maduro y sabe qué hacer sin tener que pedir ayuda a alguien.'
            );            
        break;
    
    case 'geminis':
        console.log(
            'No dude en agasajar a los que aprecia de la manera que desee. Siempre su espíritu servicial lo convirtió en un gran anfitrión e hizo que la gente lo valore.'
            );            
        break;
    //Para los casos en que hay acentos pordemos crear dos casos
    case 'cáncer':
    case 'cancer':
        console.log(
            'Sería bueno que deje de decidir por los demás sin que ellos se lo pidan. Intente averiguar lo que los otros desean antes de imponer sus criterios.'
            );            
        break;
    case 'leo':
        console.log(
            'Intente definir cuáles son las verdaderas prioridades en su vida y luego dedíquese a aquello que no merece tanto atención. No desperdicie el tiempo.'
            );            
        break;
    case 'virgo':
        console.log(
            'Prepárese, ya que hoy será una jornada especial para planificar todos los deseos que anheló en su vida. Sepa que pronto conseguirá alcanzarlos.'
            );            
        break;
    case 'libra':
        console.log(
            'Hoy se sentirá una persona más fuerte gracias a esos cambios rotundos que vivió meses atrás. Trate de usar esa energía para emprender cosas nuevas.'
            );            
        break;
    case 'escorpio':
        console.log(
            'Deberá enfocar la vida de forma responsable y paciente, de lo contrario, todo lo que se proponga podría diluirse rápidamente. Trate de tranquilizarse.'
            );            
        break;
    case 'sagitario':
        console.log(
            'Intente aceptarse con sus virtudes y defectos. Entienda que en su vida debería ser menos exigente consigo mismo y dejar que las cosas fluyan solas.'
            );            
        break;
    case 'capricornio':
        console.log(
            'Jornada importante para los logros laborales y el reconocimiento social. Sepa que su inteligencia brillará en todos los aspectos y tendrá muy buenos resultados.'
            );            
        break;
    case 'acuario':
        console.log(
            'Aunque no quiera necesitará tomarse un respiro o no podrá cumplir con sus obligaciones. Sepa que su ritmo de vida ha alcanzado niveles veloces.'
            );            
        break;
    case 'cancer':
        console.log(
            'Sepa que se aproxima una etapa donde todo lo que proyecte crecerá de forma efectiva. Determine nuevas metas, ya que obtendrá el éxito esperado.'
            );                  
        break;
    default:
        console.log('No encontramos su signo')
        break;
}