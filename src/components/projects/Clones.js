import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import {CreativeCodingWrapper} from './MiniProjectsCSS';
import MiniProject from './MiniProject';

import Grid from "../../commons/Grid";
import PageHeader from "../../commons/PageHeader";
import Button from "../../commons/Button";

const Clones = () => {
    const [showAll, setShowAll] = useState(false);

    const clones = useStaticQuery(graphql`
    {
      allClonesProjectsJson {
        edges {
            node {
                demo
                github
                id
                picture
                title
            }
        }
      }
    }
  `)

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <CreativeCodingWrapper>
            <PageHeader>Admired Web giants clones</PageHeader>

            <Grid collapseHeight="700px" clone={true} showAll={showAll} >
                {clones.allClonesProjectsJson.edges.map(({node}) => (
                    <MiniProject key={node.id} node={node}/>
                ))}
                {!showAll && (
                    <Button onClick={handleShowAll} className="showall__button">
                        Show all
                    </Button>
                )}
            </Grid>
        </CreativeCodingWrapper>
    );
};

export default Clones;