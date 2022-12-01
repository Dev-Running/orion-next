import * as ContextMenu from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
export const ContextMenuComponent = ({ children }) => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false)
  const [urlsChecked, setUrlsChecked] = useState(false)

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ContextMenuTrigger">
        {children}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className="w-56 rounded-sm bg-neutral-800 text-sm text-neutral-300 outline-none drop-shadow-xl"
          //   sideOffset={5}
          //   align="end"
        >
          <ContextMenu.Item className="flex w-full justify-between rounded-t-sm bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
            Back <div className="text-primary">⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="flex w-full justify-between bg-neutral-800  py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
            Foward <div className="text-primary">⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="flex w-full justify-between bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
            Reload <div className="text-primary">⌘+R</div>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="flex w-full justify-between bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
              More Tools
              <div className="text-primary">
                <ChevronRightIcon />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent
                className="text-sm text-neutral-300"
                sideOffset={2}
                alignOffset={-5}
              >
                <ContextMenu.Item className="flex  w-full justify-between rounded-t-sm bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
                  Save Page As… <div className="text-primary">⌘+S</div>
                </ContextMenu.Item>
                <ContextMenu.Item className="flex w-full justify-between bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
                  Create Shortcut…
                </ContextMenu.Item>
                <ContextMenu.Item className="flex w-full justify-between bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
                  Name Window…
                </ContextMenu.Item>
                <ContextMenu.Separator className="ContextMenuSeparator" />
                <ContextMenu.Item className="flex w-full justify-between rounded-b-sm bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700">
                  Developer Tools
                </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenu.Separator className="my-1  mx-auto h-[1px]  w-[93%] bg-neutral-300/10" />

          <ContextMenu.CheckboxItem
            className="flex w-full justify-between rounded-b-sm bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700"
            checked={bookmarksChecked}
            onCheckedChange={(e) => setBookmarksChecked(!bookmarksChecked)}
          >
            <ContextMenu.ItemIndicator className="absolute  left-2 mt-[0.15rem]   text-white">
              <CheckIcon className="scale-105" />
            </ContextMenu.ItemIndicator>
            Show Bookmarks <div className="text-primary">⌘+B</div>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            className="flex w-full justify-between rounded-b-sm bg-neutral-800 py-[0.4rem] pr-4 pl-8 outline-none hover:cursor-pointer hover:bg-neutral-700"
            checked={urlsChecked}
            onCheckedChange={(e) => setUrlsChecked(!urlsChecked)}
          >
            <ContextMenu.ItemIndicator className="absolute  left-2 mt-[0.15rem]   text-white">
              <CheckIcon className="scale-105" />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
}
