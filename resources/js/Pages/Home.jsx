import MainLayout from "@/Layouts/MainLayout";
import { StarIcon } from "@chakra-ui/icons";
import {
    Box,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

const Home = (props) => {
    return (
        <>
            <Heading m={2} fontSize={{ base: "24px", md: "40px" }}>
                ショップ一覧
            </Heading>

            <VStack mx={2} spacing={4} align="stretch">
                {props.shops.map((shop) => (
                    <Link
                        key={shop.id}
                        href={`/shop/${shop.id}`}
                        _hover={{ textDecoration: "none", boxShadow: "none",color:"blue.300" }}
                        p={4}
                        align="stretch"
                        borderWidth={"1px"}
                        borderRadius={"lg"}
                        overflow={"hidden"}
                        boxShadow={"lg"}
                    >
                        <Box>
                            <HStack spacing={4}>
                                <Image
                                    boxSize={"100px"}
                                    objectFit="cover"
                                    src="https://placehold.jp/100x100.png"
                                    alt={shop.name}
                                />
                                <VStack align={"start"}>
                                    <Heading as={"h3"} size={"md"}>
                                        {shop.name}
                                    </Heading>
                                    <Text>{shop.description}</Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </Link>
                ))}
            </VStack>
            <Heading
                as={"h2"}
                fontSize={{ base: "24px", md: "40px" }}
                mt={8}
                mb={2}
            >
                新着レビュー
            </Heading>
            <Box py={"4"}>
                <VStack spacing={4} align={"stretch"}>
                    {props.newReviews.map((review) => (
                        <Box
                            key={review.id}
                            p={4}
                            align="stretch"
                            borderWidth={"1px"}
                            borderRadius={"lg"}
                            overflow={"hidden"}
                            boxShadow={"lg"}
                        >
                            <VStack align={"start"}>
                                <Text fontWeight={"bold"}>
                                    {review.user.name}
                                </Text>
                                <Text>{review.comment}</Text>
                                <HStack spacing={1}>
                                    {Array(5)
                                        .fill("")
                                        .map((_, index) => (
                                            <StarIcon
                                                key={index}
                                                color={
                                                    index < review.rating
                                                        ? "yellow.500"
                                                        : "gray.300"
                                                }
                                            />
                                        ))}
                                </HStack>
                            </VStack>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </>
    );
};

Home.layout = (page) => (
    <MainLayout children={page} title={import.meta.env.VITE_APP_NAME} />
);

export default Home;
