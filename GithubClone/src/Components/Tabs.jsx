import { Badge, Card, Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function TabArea() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );
    const data = JSON.parse(sessionStorage.getItem('user'));

    const tabs = [
        {
            id: 'Overview',
            content: (
                <span>
                    <i className="fa-solid fa-book-open"></i>   Overview
                </span>
            ),
            accessibilityLabel: 'All customers',
            panelID: 'Overview',
        }, {
            id: 'Repository',
            content: (
                <span>
                    <i className="fa-solid fa-book-bookmark"></i>   Repository <Badge status="new">{data[0].public_repos}</Badge>
                </span>
            ),
            accessibilityLabel: 'All customers',
            panelID: 'Repository',
        }, {
            id: 'Projects',
            content: (
                <span>
                    <i className="fa-solid fa-table-columns"></i>    Projects 
                </span>
            ),
            accessibilityLabel: 'All customers',
            panelID: 'Projects',
        }, {
            id: 'Package',
            content: (
                <span>
                    <i className="fa-solid fa-cube"></i>  Package 
                </span>
            ),
            accessibilityLabel: 'All customers',
            panelID: 'Package',
        }, {
            id: 'Stars',
            content: (
                <span>
                    <i className="fa-solid fa-star"></i>   Stars <Badge status="new">10+</Badge>
                </span>
            ),
            accessibilityLabel: 'All customers',
            panelID: 'Stars',
        },
        {
            id: 'Sponsoring',
            content: (
                <span>
                    <i className="fa-solid fa-heart"></i>   Sponsoring <Badge status="new">4</Badge>
                </span>
            ),
            panelID: 'Sponsoring',
        },
    ];

    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <Card.Section title={tabs[selected].content}>
                    <p>Tab {selected} selected</p>
                </Card.Section>
            </Tabs>
        </Card>
    );
}

export default TabArea