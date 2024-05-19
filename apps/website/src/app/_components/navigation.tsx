'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@weyneshof/ui/navigation-menu';
import { type PropsWithChildren } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@weyneshof/ui/avatar';
import { type User } from 'next-auth';
import { Button } from '@weyneshof/ui/button';

export default function Navigation(
  props: PropsWithChildren<{
    user?: User;
  }>,
) {
  return (
    <div className="grid w-full grid-cols-3 p-2">
      <div></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Speelpleinwerking</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Verhuur</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/domein'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Domein
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/info'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Info VZW
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/contact'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className={'flex items-center justify-end'}>
        {props.user ? (
          <Avatar>
            <AvatarImage
              src={props.user.image as string}
              alt={props.user.name as string}
            />
            <AvatarFallback>{props.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <Link href={'/login'}>
            <Button variant={'link'}>login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
