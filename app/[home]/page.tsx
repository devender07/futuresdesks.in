import { InstagramButton, WhatsAppButton } from "@/components/Button"
import { Container,Heading, Content  } from "@/components/Container";
import { heroText, whyChooseUS, projectsDetails } from "@/constants/constants"
import Image from "next/image"
import { Cards } from "@/components/Cards"
import Footer from "@/components/Footer"


const page = () => {
    return (
        <>
            <Container className="justify-center gap-10 lg:gap-[15rem] px-4 py-[4rem] flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 px-1 flex flex-col items-center text-center gap-6 lg:items-start lg:text-start">

                    <Heading className="font-Space font-semibold tracking-wide text-5xl lg:text-7xl  ">
                        {heroText.title}
                    </Heading>

                    <Content className="text-2xl text-slate-500">
                        {heroText.content}
                    </Content>
                    <InstagramButton className="text-xl">View In Instagram </InstagramButton>
                </div>

                <div className="w-full lg:w-2/6 lg:min-w-[500px] flex justify-center gap-5 lg:gap-10" >
                    <div>
                        <Image src={'/hero-1.jpg'} height={250} width={300} alt="hero-1" className="mb-20 rounded-xl" />
                    </div>
                    <div>
                        <Image src={'/hero-2.jpg'} height={250} width={300} alt="hero-1" className="mt-20 rounded-xl" />
                    </div>
                </div>
            </Container>

            <Container className="px-4 py-[4rem] flex-col">
                <Heading className="text-center text-5xl font-Space font-semibold tracking-wide">Why Choose US</Heading>

                <Container className="gap-10 flex-wrap justify-center pt-20">
                    {whyChooseUS.map((item, index) => (
                        <Cards key={index} image={item.image} className="w-[600px] h-auto lg:h-[200px] border">
                            <Heading className="text-3xl">{item.heading}</Heading>
                            <Content className="text-xl">{item.content}</Content>
                        </Cards>
                    ))}
                </Container>
            </Container>

            <Container className="flex-wrap justify-evenly pb-20">
                {projectsDetails.map((project, index) => (
                    <Cards key={index} className="w-[300px] h-auto">
                        <Heading className="text-6xl text-center font-extrabold">{project.heading}</Heading>
                        <Content className="text-xl">{project.content}</Content>
                    </Cards>
                ))}
            </Container>

            <Container className="justify-center flex-col gap-20 p-2">
                <Heading className="w-full lg:w-1/3 font-Space font-semibold tracking-wide text-5xl lg:text-8xl text-center">Let's start startup</Heading>
                <WhatsAppButton>Connect on Whatsapp</WhatsAppButton>
                <Image src={'/cap.svg'} height={250} width={250} alt="logo" className="h-[250px] w-[250px]"></Image>
                <Heading className="text-2xl text-center font-normal text-slate-500">We help startups across India to reach their heights.</Heading>
            </Container>

            <Footer /> 
        </>
    )
}

export default page
