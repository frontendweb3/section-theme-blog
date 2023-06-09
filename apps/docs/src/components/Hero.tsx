import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
} from "@mantine/core";
import React from "react";
import {
  IconBrandGithub
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    marginLeft: "10px",
    color: "gray",
    backgroundColor: "black",

    "&: hover": {
      color: "black",
      backgroundColor: "white",
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: "10px",
        marginLeft: 0,
      },
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Installation of the{" "}
          <Text component="span" className={classes.highlight} inherit>
            Section theme blog
          </Text>{" "}
          with Nextra.js
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            The section is nextra and MDX-based blog theme. You can start your
            blog within just one minute. It has an inbuilt dark mode, a Search
            bar, Customize Navigation, and SEO Support.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            href="/docs"
            className={classes.control}
            size="xl"
            variant="default"
            color="gray"
          >
            Installation
          </Button>
          <Button
            component="a"
            href="https://github.com/frontendweb3/section-theme-blog"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
        </div>
      </div>
    </Container>
  );
}
