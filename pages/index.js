import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
<<<<<<< HEAD
import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
=======

function GlobalStyle()
{
    return (
        <style global jsx>{`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        body {
            font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
        }
        #__next {
            flex: 1;
        }
        #__next > * {
            flex: 1;
        }
        /* ./App fit Height */ 
        `}</style>
    );
}
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387

function Title(props)
{
    const Tag = props.tag || 'h1';
    return (
       <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} { 
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
       </>
    );
}
<<<<<<< HEAD

export default function PaginaInicial() {
    // const username = 'bruna24nunes';
    const [username, setUsername] = React.useState('abrunaanunes');
    const router = useRouter();
    const imageDefault = 'https://i.pinimg.com/474x/79/25/6d/79256ddaf1506418b85112a77e582814.jpg';
    const nameDefault = 'Joey Tribbiani';
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'start',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.pinimg.com/originals/34/12/85/3412856403724d2dc00e3d80903f7461.jpg)',
            backgroundPosition: 'center', backgroundSize: 'cover'
=======
//Component
// function HomePage()
// {
//     return (
//         <div>
//             <GlobalStyle/>
//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
    const username = 'bruna24nunes';
  
    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
<<<<<<< HEAD
              width: '100%', maxWidth: '590px',
              borderRadius: '5px', padding: '32px', margin: '5rem',
=======
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
<<<<<<< HEAD
              onSubmit={function (event) {
                event.preventDefault();
                router.push('/chat');
              }}
=======
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
<<<<<<< HEAD

              <TextField
                value={username}
                onChange={
                  function(event) {
                    //Capturar o valor
                    const input_value = event.target.value;
                    //Trocar o valor da variável
                    setUsername(input_value);
                  }
                }
=======
  
              <TextField
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
<<<<<<< HEAD
                  contrastColor: appConfig.theme.colors.neutrals[999],
                  mainColor: appConfig.theme.colors.neutrals[300],
                  mainColorLight: appConfig.theme.colors.neutrals[100],
                  mainColorStrong: appConfig.theme.colors.neutrals[600],
=======
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
<<<<<<< HEAD
                maxWidth: '150px',
                height: '150px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '0.25rem',
=======
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
              }}
            >
              <Image
                styleSheet={{
<<<<<<< HEAD
                  borderRadius: '0.25rem',
                }}
                src={username.length > 2 ? `https://github.com/${username}.png` : imageDefault}
              />
              {/* <Text
=======
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
<<<<<<< HEAD
                  {
                    username.length < 3 ? nameDefault :

                    <Link href={`https://github.com/${username}`}>
                      {username}
                    </Link>
                  }
              </Text> */}
=======
                {username}
              </Text>
>>>>>>> 902621d49b0d9d718bdf7c8ecf2432c5448b3387
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }