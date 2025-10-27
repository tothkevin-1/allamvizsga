import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Átnevezzük, hogy ne ütközzön
import { Box, Heading, Text, Link } from '@chakra-ui/react'; // Importáljuk a Chakra komponenseket

const CourseCard = ({ course }) => {
  return (
    // A sima <div> helyett egy 'Box' komponenst használunk, ami minden stílus propot ismer
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6} // padding
      mb={4} // margin-bottom
      boxShadow="md"
    >
      {/* A <h3> helyett 'Heading' */}
      <Heading as="h3" size="md" mb={2}>
        {course.title}
      </Heading>
      
      {/* A <p> helyett 'Text' */}
      <Text fontSize="sm" color="gray.600">
        Tanár: {course.teacher}
      </Text>
      <Text mt={4}>{course.description}</Text>

      {/* A Chakra Link komponensét összekötjük a React Router Linkjével */}
      <Link as={RouterLink} to={`/courses/${course.id}`} color="teal.500" fontWeight="bold" mt={4} display="inline-block">
        Kurzus megtekintése
      </Link>
    </Box>
  );
};

export default CourseCard;