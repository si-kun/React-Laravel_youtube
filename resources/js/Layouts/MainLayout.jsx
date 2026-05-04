import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import React from "react";

const MainLayout = ({ children,title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
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
            <Box>{children}</Box>
            {/* フッター */}
            <Box>
                <Box
                    bg={"orange.700"}
                    color={"white"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    <Text
                        fontSize={{ base: "13", md: "16" }}
                        py={{ base: "2", md: "3" }}
                    >
                        &copy; 2026 {import.meta.env.VITE_APP_NAME}
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;
