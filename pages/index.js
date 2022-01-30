import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

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

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('');
    const router = useRouter();
    const imageDefault = 'https://i.pinimg.com/474x/79/25/6d/79256ddaf1506418b85112a77e582814.jpg';
    const nameDefault = 'Whoo?';
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'start',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.pinimg.com/originals/34/12/85/3412856403724d2dc00e3d80903f7461.jpg)',
            backgroundPosition: 'center', backgroundSize: 'cover'
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%', maxWidth: '350px',
              borderRadius: '5px', padding: '32px', margin: '3rem',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            <Box
              as="div"
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
            </Box>
            {/* Photo Area */}
            <Box
              styleSheet={{
                maxWidth: '150px',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '0.75rem',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '0.25rem',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '0.25rem',
                  marginBottom: '0.5rem',
                }}
                src={username.length > 2 ? `https://github.com/${username}.png` : imageDefault}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                  {
                    username.length < 3 ? nameDefault :

                    <Text
                    variant="body4"
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals[200],
                      fontSize: ".8rem",
                      fontWeight: "600",
                      padding: "3px 10px",
                      borderRadius: "1000px",
                      minHeight: "20px",
                    }}
                    >
                      {username}
                    </Text>
                    }
              </Text>
            </Box>
            {/* Photo Area */}

            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (event) {
                event.preventDefault();
                router.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: '100%', textAlign: 'center', marginBottom: '32px',
              }}
            >
              <TextField
                value={username}
                placeholder='Username...'
                onChange={
                  function(event) {
                    //Capturar o valor
                    const input_value = event.target.value;
                    //Trocar o valor da variável
                    setUsername(input_value);
                  }
                }
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
                disabled={username < 2}
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals[999],
                  mainColor: appConfig.theme.colors.neutrals[300],
                  mainColorLight: appConfig.theme.colors.neutrals[100],
                  mainColorStrong: appConfig.theme.colors.neutrals[600],
                }}
              />
            </Box>
            {/* Formulário */}
          </Box>
        </Box>
      </>
    );
  }