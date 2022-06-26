import { Container, Text, Spacer, Button } from '@nextui-org/react'
import { IoMailOutline } from "react-icons/io5";

export default function Home() {
  return (
    <Container fluid css={{
      backgroundColor: '$background',
    }}>
      <Spacer y={2} />
      <Container>
        <Text css={{
          color: '$text',
          fontWeight: '$normal',
          fontSize: '$xl2',
          letterSpacing: '$wider'
        }}>Welcome, I&apos;m</Text>
        <Text css={{
          // color: '$textGradientBlue',
          textGradient: "45deg, $blue600 -20%, $pink600 100%",
          fontWeight: '$extrabold',
          fontSize: '$xl8'
        }}>José Puente.</Text>
        <Text css={{
          // color: '$textHighRose',
          textGradient: "45deg, $red600 -20%, $pink600 100%",
          fontWeight: '$light',
          fontSize: '$xl7',
          letterSpacing: '$normal',
          lineHeight: '$sm'
        }}>Systems Engineering student and Web Dev.</Text>
      </Container>
      <Spacer y={2} />
      <Container>
        <Text className='max-w-60' size="1.25rem" css={{
          color: '$text',
          letterSpacing: '$wide'
        }}>I&apos;m a Systems Engineering student and software developer based in Cartagena de Indias, Colombia. I specialize in frontend web development to build beautiful and functional web applications.</Text>
        <Spacer y={2} />
        <Button size="lg" ghost css={{
          color: '$textHighBlue'
        }}>
          <IoMailOutline />
          <Spacer x={1} />
          <Text css={{
            color: '$text',
            fontSize: '$xl'
          }}>Let&apos;s get in touch!</Text>
        </Button>
      </Container>
      <Spacer y={2} />

      <Container>
        <Text className='max-w-70' css={{
          fontSize: '$xl4',
          color: '$text',
          letterSpacing: '$wide',
        }}>0. About me.</Text>
        <Spacer y={0.5} />
        <Text className='max-w-70' css={{
          fontSize: '$xl2',
          color: '$text',
          letterSpacing: '$wide',
        }}>Hello everyone! 👋 My name is José Alejandro Puente Velásquez, I am a Systems Engineering student and frontend software developer based in Cartagena de Indias, Colombia 🇨🇴. I&apos;m a tech enthusiast and a code lover 💘 who is always learning new technologies and skills 👨‍💻.</Text>
      </Container>
      <Spacer y={2} />
    </Container>
  )
}
