import { Popover } from "@headlessui/react";

export default function Account() {
  return (
    <div className="mt-auto">
      <Popover>
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex">
            test1
        </Popover.Button>
        <Popover.Panel>
            acilacak yer!
        </Popover.Panel>
      </Popover>
    </div>
  );
}
