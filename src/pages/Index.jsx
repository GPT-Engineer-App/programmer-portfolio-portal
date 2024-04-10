import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Card, CardHeader, CardBody, Image, Stack, Divider, Avatar, Link, IconButton, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project goes here.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjcxMDIxMnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of the project goes here.",
    image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjcxMDIxMnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of the project goes here.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjcxMDIxMnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const skills = ["JavaScript", "React", "Node.js", "Python", "HTML/CSS"];

const posts = [
  {
    title: "Blog Post 1",
    description: "A brief description of the blog post goes here.",
    link: "#",
  },
  {
    title: "Blog Post 2",
    description: "A brief description of the blog post goes here.",
    link: "#",
  },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <Box position="absolute" top={4} right={4}>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
      </Box>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Avatar size="2xl" name="John Doe" src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwaGVhZHNob3R8ZW58MHx8fHwxNzEyNzEwMjEyfDA&ixlib=rb-4.0.3&q=80&w=1080" marginBottom={4} />
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Software Developer
          </Text>
          <HStack justify="center" spacing={4} marginTop={4}>
            <Link href="#" isExternal>
              <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" variant="ghost" />
            </Link>
            <Link href="#" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" />
            </Link>
            <Link href="#" isExternal>
              <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" />
            </Link>
          </HStack>
        </Box>

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <Wrap spacing={4}>
            {projects.map((project, index) => (
              <WrapItem key={index}>
                <Card maxW="sm">
                  <CardHeader>
                    <Heading size="md">{project.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Image src={project.image} alt={project.title} borderRadius="lg" />
                    <Stack mt={6} spacing={3}>
                      <Text>{project.description}</Text>
                      <Link href={project.link} color="blue.500" isExternal>
                        View Project
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl">
            Skills
          </Heading>
          <Wrap spacing={4}>
            {skills.map((skill, index) => (
              <WrapItem key={index}>
                <Box bg={useColorModeValue("gray.100", "gray.700")} borderRadius="lg" p={4}>
                  <Text fontSize="lg">{skill}</Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl">
            Blog
          </Heading>
          {posts.map((post, index) => (
            <Box key={index}>
              <Link href={post.link}>
                <Heading as="h3" size="md" mb={2}>
                  {post.title}
                </Heading>
              </Link>
              <Text>{post.description}</Text>
              {index !== posts.length - 1 && <Divider my={4} />}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
