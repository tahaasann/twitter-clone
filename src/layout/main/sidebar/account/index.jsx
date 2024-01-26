import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "~/layout/main/sidebar/account/more";

export default function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-full py-3 w-[300px] overflow-hidden left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
            <More />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
