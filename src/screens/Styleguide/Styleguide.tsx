/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ListItem, Icon as VectorIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SelectedTransition } from 'animations/List/SelectedTransition';
import { InfoCard } from 'components/shared/Cards/InfoCard';
declare const global: { HermesInternal: null | {} };

const list = [
  {
    title: 'React Native Elements',
    icon: <TouchableOpacity><Icon size={15} name="heartbeat" /></TouchableOpacity>,
    content: "React Native Elements Cross Platform React Native UI Toolkit"
  },
  {
    title: 'Redux',
    icon: <TouchableOpacity><Icon size={15} name="store" /></TouchableOpacity>,
    content: "Redux A Predictable State Container for JS Apps"
  },
  {
    title: 'Storybook',
    icon: <TouchableOpacity><VectorIcon type="FontAwesome5" size={15} name="book" /></TouchableOpacity>,
    content: "Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient."
  },
  {
    title: 'I18N',
    icon: <TouchableOpacity><VectorIcon type="FontAwesome5" size={15} name="language" /></TouchableOpacity>,
    content: "Lightweight simple translation module with dynamic JSON storage."
  },
  {
    title: 'Jest',
    icon: <TouchableOpacity><Icon size={15} name="cogs" /></TouchableOpacity>,
    content: "Jest is a delightful JavaScript Testing Framework with a focus on simplicity."
  },
  {
    title: 'Docker',
    icon: <TouchableOpacity><Icon size={15} name="square" /></TouchableOpacity>,
    content: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software"
  },

]

const Styleguide = () => {
  const [active, setActive] = useState<number>(-1);
  const [prevActive, setPrevActive] = useState<number>(-1);
  const [reset, setReset] = useState(true);

  const handleReset = () => {
    setPrevActive(active);
    setActive(-1);
  }

  useEffect(() => {
    if (active !== prevActive) {
      setReset(true);
    }

    if (active === prevActive) {
      setReset(false);
    }
  }, [active, prevActive])

  return (
    <>
      <View>
        {
          list.map((item, i) => (
            <View key={i}>
              <TouchableOpacity onPress={() => setActive(i)}>
                <SelectedTransition
                  running={active === -1 || (active === i && active !== -1)}
                >
                  <ListItem underlayColor={active === i ? '#33ee33' : ''} bottomDivider>
                    {item.icon}
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </SelectedTransition>
              </TouchableOpacity>
              {active === i && (
              <SelectedTransition
                  running={active === i}
              >
                <InfoCard
                  onPress={handleReset} 
                  title={item.title}
                  icon={item.icon} 
                  content={item.content} 
                />
              </SelectedTransition>
              )}
            </View>
          ))}
      </View>

    </>
  )
}

export default Styleguide;
