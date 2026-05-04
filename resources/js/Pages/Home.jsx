import { HamburgerIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import {
    Box,
    Heading,
    HStack,
    IconButton,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

const Home = (props) => {
    return (
        <>
            <Box bg={"orange.700"}>
                <HStack
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    py={{ base: 0, md: 3 }}
                    px={{ base: 2, md: 2 }}
                >
                    {/* ヘッダー */}
                    <Heading
                        as={"h1"}
                        size={{ base: "xs", md: "xl" }}
                        color={"white"}
                    >
                        <Link href="/home" _hover={{ color: "gray.400" }}>
                            {import.meta.env.VITE_APP_NAME}
                        </Link>
                    </Heading>
                    <HStack
                        display={{ base: "none", md: "flex" }}
                        fontWeight={"bold"}
                    >
                        <Link
                            href="#"
                            _hover={{ color: "gray.500" }}
                            color={"white"}
                        >
                            マイページ
                        </Link>
                        <Link
                            href="#"
                            _hover={{ color: "gray.500" }}
                            color={"white"}
                        >
                            店舗登録
                        </Link>
                    </HStack>
                    {/* responsive menu */}
                    <Box
                        display={{ base: "block", md: "none" }}
                        px={{ base: "0", md: "none" }}
                        py={{ base: "1", md: "none" }}
                    >
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant={"outline"}
                            />
                            <MenuList>
                                <MenuItem icon={<SettingsIcon />}>
                                    マイページ
                                </MenuItem>
                                <MenuItem>店舗の登録</MenuItem>
                                <MenuItem>店舗の登録</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </HStack>
            </Box>
            <Heading m={2} fontSize={{ base: "24px", md: "40px" }}>
                ショップ一覧
            </Heading>

            <VStack mx={2} spacing={4} align="stretch">
                {props.shops.map((shop) => (
                    <Box
                        key={shop.id}
                        p={4}
                        align="stretch"
                        borderWidth={"1px"}
                        borderRadius={"lg"}
                        overflow={"hidden"}
                        boxShadow={"lg"}
                    >
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

            {/* フッター */}
            <Box>
                <Box
                    bg={"orange.700"}
                    color={"white"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    <Text fontSize={{base:"13", md:"16"}} py={{base: "2",md:"3"}}>
                        &copy; 2026 {import.meta.env.VITE_APP_NAME}
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default Home;
