//
//  MenuController.swift
//  Tusker
//
//  Created by Shadowfacts on 11/14/20.
//  Copyright © 2020 Shadowfacts. All rights reserved.
//

import UIKit

struct MenuController {
    
    static let composeCommand: UIKeyCommand = {
        return UIKeyCommand(title: "Compose", action: #selector(MainSplitViewController.presentCompose), input: "n", modifierFlags: .command)
    }()
    
    static func refreshCommand(discoverabilityTitle: String?) -> UIKeyCommand {
        return UIKeyCommand(title: "Refresh", action: #selector(RefreshableViewController.refresh), input: "r", modifierFlags: .command, discoverabilityTitle: discoverabilityTitle)
    }
    
    static func sidebarCommand(item: MainSidebarViewController.Item, command: String) -> UIKeyCommand {
        let data: Any
        if case let .tab(tab) = item {
            data = tab.rawValue
        } else if case .search = item {
            data = "search"
        } else if case .bookmarks = item {
            data = "bookmarks"
        } else {
            fatalError()
        }
        return UIKeyCommand(
            title: item.title,
            image: UIImage(systemName: item.imageName!),
            action: #selector(MainSplitViewController.handleSidebarItemCommand(_:)),
            input: command,
            modifierFlags: .command,
            propertyList: data
        )
    }
    
    static let sidebarItemKeyCommands: [UIKeyCommand] = [
        sidebarCommand(item: .tab(.timelines), command: "1"),
        sidebarCommand(item: .tab(.notifications), command: "2"),
        sidebarCommand(item: .search, command: "3"),
        sidebarCommand(item: .bookmarks, command: "4"),
        sidebarCommand(item: .tab(.myProfile), command: "5"),
    ]
    
    static let nextSubTabCommand = UIKeyCommand(title: "Next Sub Tab", action: #selector(TabbedPageViewController.selectNextPage), input: "]", modifierFlags: [.command, .shift])
    
    static let prevSubTabCommand = UIKeyCommand(title: "Previous Sub Tab", action: #selector(TabbedPageViewController.selectPrevPage), input: "[", modifierFlags: [.command, .shift])
    
    static func buildMainMenu(builder: UIMenuBuilder) {
        builder.insertChild(buildFileMenu(), atStartOfMenu: .file)
        builder.insertChild(buildSubTabMenu(), atStartOfMenu: .view)
        builder.insertChild(buildSidebarShortcuts(), atStartOfMenu: .view)
    }
    
    private static func buildFileMenu() -> UIMenu {
        return UIMenu(
            title: "",
            image: nil,
            identifier: nil,
            options: .displayInline,
            children: [
                composeCommand,
                refreshCommand(discoverabilityTitle: nil),
            ]
        )
    }
    
    private static func buildSubTabMenu() -> UIMenu {
        return UIMenu(
            title: "",
            image: nil,
            identifier: nil,
            options: .displayInline,
            children: [
                prevSubTabCommand,
                nextSubTabCommand,
            ]
        )
    }
    
    private static func buildSidebarShortcuts() -> UIMenu {
        return UIMenu(
            title: "",
            image: nil,
            identifier: nil,
            options: .displayInline,
            children: sidebarItemKeyCommands
        )
    }
    
}

extension MenuController {
    class SidebarItem: NSObject, NSCopying {
        let item: MainSidebarViewController.Item
        
        init(item: MainSidebarViewController.Item) {
            self.item = item
        }
        
        func copy(with zone: NSZone? = nil) -> Any {
            return SidebarItem(item: self.item)
        }
    }
}
