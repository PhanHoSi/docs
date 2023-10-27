import React from 'react';
import { Flex, View, Heading, Grid } from '@aws-amplify/ui-react';

interface CategoryFeatureProps {
  category: string;
  children: React.ReactNode;
}
const CategoryFeature: React.FC<CategoryFeatureProps> = ({
  category,
  children
}) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
        paddingRight={'xxl'}
        as="ul"
        className="category-list"
      >
        <View as="li" columnSpan={2}>
          <Heading
            level={4}
            textDecoration="none"
            marginBottom="-0.75rem"
          >{`${category}`}</Heading>
        </View>
        <View as="ul" className="category-list">
          {children}
        </View>
      </Flex>
    </>
  );
};

export default CategoryFeature;
