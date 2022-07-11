import { Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
    >
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
        ユーザー管理アプリ
      </Heading>
    </Flex>
  );
});
