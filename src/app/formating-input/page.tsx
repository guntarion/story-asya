'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  Text,
  useColorModeValue,
  Heading,
  useToast,
  Card,
  CardBody,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const categories = [
  { value: 'cookierun', label: 'Cookie Run' },
  { value: 'dandysworld', label: "Dandy's World" },
  { value: 'fnaf', label: "Five Nights at Freddy's" }
]

export default function FormatingInputPage() {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [storyNumber, setStoryNumber] = useState('')
  const [description, setDescription] = useState('')
  const [unlockTime, setUnlockTime] = useState('')
  const [generatedJson, setGeneratedJson] = useState('')

  const toast = useToast()
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const codeBg = useColorModeValue('gray.50', 'gray.900')

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const convertToUtc = (localDateTime: string) => {
    if (!localDateTime) return ''
    
    // Create a date object from the datetime-local input
    // The input is in local timezone (GMT+7), but JavaScript treats it as if it's in the browser's timezone
    const localDate = new Date(localDateTime)
    
    // Get the timezone offset in minutes (GMT+7 = -420 minutes from UTC)
    const jakartaOffset = -420 // GMT+7 in minutes
    const browserOffset = localDate.getTimezoneOffset() // Browser's offset from UTC in minutes
    
    // Calculate the difference and adjust
    const offsetDifference = jakartaOffset - browserOffset
    const utcDate = new Date(localDate.getTime() + (offsetDifference * 60 * 1000))
    
    return utcDate.toISOString()
  }

  const generateJson = () => {
    if (!category || !title || !storyNumber || !description || !unlockTime) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const slug = generateSlug(title)
    const categoryPrefix = category === 'cookierun' ? 'cookie' : 
                          category === 'dandysworld' ? 'dandys' : 'fnaf'
    const id = `${categoryPrefix}-${storyNumber.padStart(3, '0')}`
    const filename = `${id}-${slug}.md`
    const utcUnlockDate = convertToUtc(unlockTime)

    const jsonObject = {
      id,
      title,
      slug,
      category,
      filename,
      unlockDate: utcUnlockDate,
      description
    }

    const formattedJson = JSON.stringify(jsonObject, null, 6)
    setGeneratedJson(formattedJson)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedJson)
      toast({
        title: 'Copied!',
        description: 'JSON copied to clipboard',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Failed to copy',
        description: 'Could not copy to clipboard',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="lg" textAlign="center">
          Story Entry Generator
        </Heading>

        <Card bg={bg} borderColor={borderColor}>
          <CardBody>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Candy Apple Cookie and the Sweetest Truth"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Story Number</FormLabel>
                <Input
                  type="number"
                  value={storyNumber}
                  onChange={(e) => setStoryNumber(e.target.value)}
                  placeholder="e.g., 4"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g., Discover a funny story about Candy Apple Cookie"
                  rows={3}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Unlock Time (GMT+7)</FormLabel>
                <Input
                  type="datetime-local"
                  value={unlockTime}
                  onChange={(e) => setUnlockTime(e.target.value)}
                />
              </FormControl>

              <Button
                colorScheme="blue"
                size="lg"
                onClick={generateJson}
                w="full"
              >
                Generate JSON
              </Button>
            </VStack>
          </CardBody>
        </Card>

        {generatedJson && (
          <Card bg={bg} borderColor={borderColor}>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <Text fontSize="lg" fontWeight="bold">
                    Generated JSON
                  </Text>
                  <IconButton
                    aria-label="Copy to clipboard"
                    icon={<CopyIcon />}
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                  />
                </HStack>
                <Box
                  bg={codeBg}
                  p={4}
                  borderRadius="md"
                  border="1px"
                  borderColor={borderColor}
                >
                  <Text
                    as="pre"
                    fontSize="sm"
                    fontFamily="mono"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                  >
                    {generatedJson}
                  </Text>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        )}
      </VStack>
    </Container>
  )
}